export class Scale {
  d: { n: number; s: string }[];
  constructor(d: { n: number; s: string }[]) {
    this.d = d;
    console.log(d);
  }
  getColor(n: number): string {
    console.log(this.d);
    var keys = Object.keys(this.d);
    console.log(keys);
    for (let index = 0; index < keys.length - 1; index++) {
      if (keys[index] <= n.toString() && keys[index + 1] > n.toString()) {
        return (this.d[parseInt(keys[index])] as unknown) as string;
      }
    }
    return (this.d[parseInt(keys[keys.length - 1])] as unknown) as string;
  }
}
