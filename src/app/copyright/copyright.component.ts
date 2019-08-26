import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';

export interface ICopyrightComponent {
  modifiedTime?: Date;
  name?: string;
  typeCode?: string;
  uid?: string;
  template?: string;
}

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyrightComponent {
  component: {
    modifiedTime?: Date;
    name?: string;
    typeCode?: string;
    uid?: string;
    template?: string;
  };

  constructor(private comp: CmsComponentData<ICopyrightComponent>) {
    this.comp.data$.forEach(element => {
      // console.log(element.template);
      this.component = element;
    });
  }

  public getTestText(): string {
    return 'test text';
  }

  public getText(): string {
    console.log('Here copyright');
    return this.component.template.replace(
      '${currentYear}',
      new Date().getFullYear().toString()
    );
  }
}
