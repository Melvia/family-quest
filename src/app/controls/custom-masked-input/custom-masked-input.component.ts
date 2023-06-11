import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-masked-input',
  templateUrl: './custom-masked-input.component.html',
  styleUrls: ['./custom-masked-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomMaskedInputComponent),
    multi: true,
  }]
})
export class CustomMaskedInputComponent implements ControlValueAccessor, OnInit {
  // private _value: number = 0;

  // get value() {
  //   return this._value;
  // }
  //
  // @Input()
  // set value(val) {
  //   this._value = val;
  //   this._onChange(this.value);
  // }


  @ViewChild('mdInputEl') mdInputEl: ElementRef;

  public mdInput = new FormControl();

  @Input() mask: any[];

  @Input() title: string;

  private previousValue: string = '';

  private previousPlaceholder: string = '';

  private maxInputValue: number;

  private currentCursorPosition: number = 0;
  private readonly placeholderChar: string = '_';

  constructor() {
  }

  public ngOnInit(): void {
    this.mdInput.valueChanges
      .subscribe((value: string) => {
          if (!value || value === this.previousValue) {
            return;
          }
          this.currentCursorPosition = this.mdInputEl.nativeElement.selectionEnd;
          const placeholder = this.convertMaskToPlaceHolder();
          const values = this.conformValue(value, placeholder);
          const ajustedCursorPosition = this.getCursorPosition(value, placeholder, values.conformed);

          this.mdInputEl.nativeElement.value = values.conformed;
          this.mdInputEl.nativeElement.setSelectionRange(ajustedCursorPosition, ajustedCursorPosition, 'none');

         // this._onChange(values.cleaned);

          this.previousValue = values.conformed;
          this.previousPlaceholder = placeholder;

        },
        (err) => console.warn(err)
      );
  }

  private convertMaskToPlaceHolder(): string {
    return '';
  }

  private conformValue(value: string, placeholder: string): { conformed: string } {
    return { conformed: '' };
  }

  private getCursorPosition(value: string, placeholder: string, conformedValue: string): number {
    if (this.currentCursorPosition === 0) {
      return 0;
    }

    const editLength = value.length - this.previousValue.length;
    const isAddition = editLength > 0;
    return 0;
  }

  private _onChange: Function = (_: any) => {
  }

  private _onTouched: Function = (_: any) => {
  }


  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this.mdInput.setValue(value);
  }
  private _convertMaskToPlaceholder(): string {
    return this.mask.map((char) => {
      return (char instanceof RegExp) ? this.placeholderChar : char;
    }).join('');
  }
}
