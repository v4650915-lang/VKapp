import * as React from 'react';
import { createRoot } from 'react-dom/client';
import vkBridge from '@vkontakte/vk-bridge';
import {
    ConfigProvider,
    AdaptivityProvider,
    AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import App from './App.jsx';
import './App.css'; // Наши кастомные стили

// Инициализация VK Bridge
vkBridge.send('VKWebAppInit');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ConfigProvider colorScheme="dark">
        <AdaptivityProvider>
            <AppRoot>
                <App />
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>
);
