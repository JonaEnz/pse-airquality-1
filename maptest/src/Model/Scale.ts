export class Scale {
  d: { n: number; s: string }[];
  constructor(d: { n: number; s: string }[]) {
    this.d = d;
  }
  getColor(n: number): string {
    for (let index = 0; index < this.d.length; index++) {
      if (this.d[index].n > n) {
        return this.d[index].s;
      }
    }
    return this.d[this.d.length - 1].s;
  }
}
