import { NoPipe } from './no.pipe';

describe('NoPipe', () => {
  it('create an instance', () => {
    const pipe = new NoPipe();
    expect(pipe).toBeTruthy();
  });
});
