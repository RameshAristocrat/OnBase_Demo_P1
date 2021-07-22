import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export abstract class FieldAbstractController<T> implements ControlValueAccessor {
  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(value);
    }
  }
  public disabled = false;
  // tslint:disable-next-line: variable-name
  private _value: any = "";

  public writeValue(value: T) {
    this._value = value;
  }

  // tslint:disable-next-line:no-empty
  public onChange(_: any) { }

  // tslint:disable-next-line:no-empty
  public onTouched() { }

  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

export function createFieldProvider(type: any, provider = NG_VALUE_ACCESSOR) {
  return {
    provide: provider,
    useExisting: type,
    multi: true
  };
}
