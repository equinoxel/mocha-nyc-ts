/**
 * This is designed to use winston from the *main* process
 */
import * as electron from 'electron'

export class DummyLogger {
  debug(...args: any[]): void {
    console.log('DEBUG: ', args)
  }
  info(...args: any[]): void {
    console.log('INFO: ', args)
  }
  error(...args: any[]): void {
    console.log('ERROR: ', args)
  }
}

let _logger: any = undefined
/**
 * get the Schema singleton
 *
 * @export
 * @returns {Schema}
 */
function loggerFun(): any {
  try {
    _logger = _logger === undefined ? electron.remote.getGlobal('sharedObject').logger : _logger
  } catch (e) {
    _logger = new DummyLogger()
  }
  return _logger
}

export let logger = loggerFun()
