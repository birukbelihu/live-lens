import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import chokidar from 'chokidar';
import * as vscode from 'vscode';
import LivelensUtils from './livelens-utils';
import WebSocket, { WebSocketServer } from 'ws';
import express, { Request, Response, NextFunction } from 'express';

export class Server {
    static startServer(rootPath: string, port: number) {
        const app = express();

        app.use((request: Request, response: Response, next: NextFunction) => {
            if (request.url.endsWith('.html') || request.url === '/') {
                const filePath = path.join(rootPath, request.url === '/' ? 'index.html' : request.url);
                if (fs.existsSync(filePath)) {
                    let html = fs.readFileSync(filePath, 'utf-8');
                    html = html.replace(
                        '</body>',
                        `<script>
                        const ws = new WebSocket("ws://localhost:${port}");
                        ws.onmessage = (msg) => { if (msg.data === "reload") location.reload(); };
                    </script></body>`
                    );
                    response.send(html);
                    return;
                }
            }
            next();
        });

        app.use(express.static(rootPath));

        const newServer = http.createServer(app);
        const newWss = new WebSocketServer({ server: newServer });

        const watcher = chokidar.watch(rootPath, { ignored: /node_modules/ });
        watcher.on('change', () => {
            if (newWss) {
                newWss.clients.forEach((client: WebSocket) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send('reload');
                    }
                });
            }
        });

        newServer.listen(port, () => {
            LivelensUtils.showMessage(`LiveLens Server running at port ${port}`);
        });
        return { server: newServer, wss: newWss };
    }

    static stopServer(statusBarItem: vscode.StatusBarItem | null, server: http.Server | null, wss: WebSocketServer | null = null) {
        if (server) {
            server.close();
        }
        if (wss){
         wss.close();
        }
        LivelensUtils.showMessage("LiveLens Server stopped");
        if (statusBarItem) {
            statusBarItem.text = '$(rocket) Start Live Preview';
        }
        return { server: null, wss: null };
    }

    static createWebview(port: number) {
        const panel = vscode.window.createWebviewPanel(
            'liveLens',
            'Live Lens Preview',
            vscode.ViewColumn.Beside,
            { enableScripts: true }
        );

        panel.webview.html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <style>
                    body, html { margin:0; padding:0; height:100%; width:100%; }
                    iframe { width:100%; height:100%; border:none; }
                </style>
            </head>
            <body>
                <iframe src="http://localhost:${port}"></iframe>
            </body>
            </html>
        `;

        return panel;
    }
}

export default Server;