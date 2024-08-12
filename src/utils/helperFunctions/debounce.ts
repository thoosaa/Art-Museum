export default function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  timeout: number = 300,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, [...args]);
    }, timeout);
  };
}
