import * as http from 'http';
import * as vscode from 'vscode';

export class LivelensUtils {
    static showMessage(message: string) {
        vscode.window.showInformationMessage(message);
    }

    static updateStatusBar(statusBarItem: vscode.StatusBarItem | null, server: http.Server | null) {
        const rootPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
        if (!rootPath) {
            statusBarItem!.text = '$(rocket) Open Folder to Preview';
            statusBarItem!.tooltip = 'Open a workspace folder to start Web Preview';
            statusBarItem!.command = undefined;
        } else {
            statusBarItem!.text = server ? '$(stop-circle) Stop Preview' : '$(rocket) Start Preview';
            statusBarItem!.tooltip = 'Start or Stop LiveLens Preview Server';
            statusBarItem!.command = 'liveLens.toggle';
        }
    }
}

export default LivelensUtils;