import { expect } from 'chai';
import Contract from '../src/Contract';

describe('Contract', () => {
  let args = {};
  const nonContract = 'arguments';

  beforeEach(() => {
    args = {
      argument: {
        type: 'number',
        range: [0, 100],
      }
    }
  });

  describe('Contract instancing', () => {
    it('Contract.create() should return instance of Contract with empty arguments list', () => {
      const instanceContract = Contract.create();
      expect(instanceContract.args).to.deep.equal({});
    });

    it('Contract.create(args) should return instance of Contract with arguments list equal args', () => {
      const instanceContract = Contract.create(args);
      expect(instanceContract.args).to.deep.equal(args);
    });
  });

  describe('Contract.get()', () => {
    it('Contract.get() should return arguments list of instance Contract', () => {
      const instanceContract = Contract.create(args);
      expect(instanceContract.get()).to.deep.equal(args);
    });

    it('Changing value returning by Contract.get() should nоt change arguments list of instance Contract', () => {
      const instanceContract = Contract.create(args);
      let valueContract = instanceContract.get();
      valueContract.newArgument = {
        type: 'String',
      };
      expect(instanceContract.args).to.not.have.property('newArgument');
    });
  });
});
