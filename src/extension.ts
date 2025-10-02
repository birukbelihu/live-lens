import * as http from 'http';
import Server from './server';
import * as vscode from 'vscode';
import { WebSocketServer } from 'ws';
import LivelensUtils from './livelens-utils';

let server: http.Server | null = null;
let wss: WebSocketServer | null = null;
let statusBarItem: vscode.StatusBarItem | null = null;

export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration('liveLens');
	const mode = config.get<string>('mode', 'inline');
	const port = config.get<number>('port', 5500);

	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusBarItem.show();
	context.subscriptions.push(statusBarItem);

	LivelensUtils.updateStatusBar(statusBarItem, server);
	vscode.workspace.onDidChangeWorkspaceFolders(() => LivelensUtils.updateStatusBar(statusBarItem, server));

	const startPreview = () => {
		const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
		if (!rootPath) {
			vscode.window.showErrorMessage('Open a folder first!');
			return;
		}

		const status = Server.startServer(rootPath, port);
		server = status.server;
		wss = status.wss;

		if (mode === 'browser') {
			vscode.env.openExternal(vscode.Uri.parse(`http://localhost:${port}`));
		} else {
			Server.createWebview(port);
		}

		LivelensUtils.updateStatusBar(statusBarItem, server);
	};

	const stopPreview = () => {
		const result = Server.stopServer(statusBarItem, server, wss);
		server = result.server;
		wss = result.wss;
		LivelensUtils.updateStatusBar(statusBarItem, server);
	};

	context.subscriptions.push(
		vscode.commands.registerCommand('liveLens.start', startPreview),
		vscode.commands.registerCommand('liveLens.stop', stopPreview),
		vscode.commands.registerCommand('liveLens.toggle', () => {
			if (server) {
				stopPreview();
			} else {
				startPreview();
			}
		})
	);
}

export function deactivate() {
	Server.stopServer(statusBarItem, server, wss);
}
