import { spawnSync } from 'node:child_process';

export const playSound = () => {
  spawnSync('mpv', ['../../Happy_bells_notification.wav']);
};
