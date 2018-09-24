import { TypescriptUtilitiesModule } from './typescript-utilities.module';

describe('TypescriptUtilitiesModule', () => {
  let typescriptUtilitiesModule: TypescriptUtilitiesModule;

  beforeEach(() => {
    typescriptUtilitiesModule = new TypescriptUtilitiesModule();
  });

  it('should create an instance', () => {
    expect(typescriptUtilitiesModule).toBeTruthy();
  });
});
