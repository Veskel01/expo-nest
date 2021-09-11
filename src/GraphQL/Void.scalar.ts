import { CustomScalar, Scalar } from '@nestjs/graphql';

@Scalar('Void', () => null)
export class VoidScalar implements CustomScalar<unknown, undefined> {
  parseLiteral() {
    return null;
  }

  parseValue() {
    return null;
  }

  serialize() {
    return null;
  }
}
