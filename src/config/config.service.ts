import { Inject, Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
  constructor(
    @Inject('CONFIG_OPTIONS') private readonly options: { path: string },
    @Optional() private config = {},
  ) {
    readdirSync(this.options.path).map(async (f) => {
      if (f.slice(-2) === 'js') {
        const module = await import(path.resolve(this.options.path, f));
        this.config = { ...this.config, ...module.default };
      }
    });
  }
  get(path: string) {
    return path.split('.').reduce((config, pre) => config[pre], this.config);
  }
}
