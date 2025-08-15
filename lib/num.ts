export function getUniqueRandomNumbers(x: number, y: number) {
    if (x > y) throw new Error("x cannot be greater than y");
    
    const numbers = Array.from({ length: y }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > numbers.length - 1 - x; i--) {
        const randIndex = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[randIndex]] = [numbers[randIndex], numbers[i]]; // Swap
    }
    return numbers.slice(-x);
}