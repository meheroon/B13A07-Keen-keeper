import { promises as fs } from 'fs';
import path from 'path';

export async function getFriends() {
  const filePath = path.join(process.cwd(), 'public', 'friends.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContents);
}

export async function getFriendById(id) {
  const friends = await getFriends();
  return friends.find((friend) => friend.id === Number(id));
}
