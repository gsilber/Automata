import { PdaModule } from './pda.module';

describe('PdaModule', () => {
  let pdaModule: PdaModule;

  beforeEach(() => {
    pdaModule = new PdaModule();
  });

  it('should create an instance', () => {
    expect(pdaModule).toBeTruthy();
  });
});
