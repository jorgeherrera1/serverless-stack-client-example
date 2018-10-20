import {Storage} from 'aws-amplify';

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  // Storage.put if we were uploading publicly
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}