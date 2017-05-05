import {expect} from '../base'
import { DummyLogger, logger } from "../../src/common/logger";

describe('Logger', () => {
  let dummyLogger: DummyLogger

  it('DummyLogger works', () => {
    dummyLogger = new DummyLogger()

    // Only for coverage
    // Dummy logger prints stuff to console
    expect(dummyLogger.debug('')).to.be.undefined
    expect(dummyLogger.error('')).to.be.undefined
    expect(dummyLogger.info('')).to.be.undefined
  })

  it('logger function call works', () => {
    // Only for coverage
    // multiple calls should initialise and keep the _logger variable
    expect(logger.debug('')).to.be.undefined
    expect(logger.error('')).to.be.undefined
    expect(logger.info('')).to.be.undefined
    expect((): boolean => {
      logger.info('')
      logger.info('')
      return false
    }).to.be.not.undefined
  })
})
