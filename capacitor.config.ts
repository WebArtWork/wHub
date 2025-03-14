import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'whub.webart.work',
    appName: 'wHub',
    webDir: 'dist/app/browser',
    plugins: {
        AdMob: {
            appId: 'ca-app-pub-3940256099942544~3347511713' // Test AdMob App ID
        }
    }
};

export default config;

