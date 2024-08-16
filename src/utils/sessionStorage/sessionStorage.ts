export class SessionStorage {
  add(key: string) {
    sessionStorage.setItem(key, key);
  }

  has(key: string): boolean {
    if (sessionStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
