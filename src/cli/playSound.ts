import { execSync } from 'node:child_process';

export const playSuccessSound = () => {
  execSync('/opt/homebrew/bin/mpv --volume=55 ./Happy_bells_notification.wav');
};

export const playErrorSound = () => {
  execSync('/opt/homebrew/bin/mpv --volume=55 ./fail-234710.mp3');
};
