// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-color-settings-component',
//   template: `
//     <p>
//       color-settings-component works!
//     </p>
//   `,
//   styleUrls: ['./color-settings-component.component.scss']
// })
// export class ColorSettingsComponentComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-color-settings-component',
  templateUrl: './color-settings-component.html',
  styleUrls: ['./color-settings-component.component.scss']
})
export class ColorSettingsComponentComponent implements OnInit {
  primaryColor: string = '#000000';
  secondaryColor: string = '#000000';
  tertiaryColor: string = '#000000';
  backgroundColor: string = '#ffffff';

  public ctrlColors = [
    {
      title: "Color Primario",
      description: "Al modificar este color cambiarás el color de fondo en el portal.",
      color: "#FAFAFA" },
    {
      title: "Color Secundario",
      description: "Al modificar este color cambiarás el color en los textos del portal.",
      color: "#1A0C3F"
    },
    {
      title: "Color Terciario",
      description: "Al modificar este color cambiarás el color en los textos del portal.",
      color: "#F9BE2D"
    },
  ];
  constructor() {
  }

  ngOnInit(): void {
    // Recuperar los colores anteriores del sessionStorage si existen
    const storedPrimaryColor = sessionStorage.getItem('primaryColor');
    const storedSecondaryColor = sessionStorage.getItem('secondaryColor');
    const storedTertiaryColor = sessionStorage.getItem('tertiaryColor');
    const storedBackgroundColor = sessionStorage.getItem('backgroundColor');

    if (storedPrimaryColor !== null) {
      this.primaryColor = storedPrimaryColor;
    }

    if (storedSecondaryColor !== null) {
      this.secondaryColor = storedSecondaryColor;
    }

    if (storedTertiaryColor !== null) {
      this.tertiaryColor = storedTertiaryColor;
    }

    if (storedBackgroundColor !== null) {
      this.backgroundColor = storedBackgroundColor;
    }
  }
  onNgSubmit() {
  }
  onSave(): void {
  console.log(this.ctrlColors);

    // Guardar los colores en sessionStorage
    sessionStorage.setItem('primaryColor', this.primaryColor);
    sessionStorage.setItem('secondaryColor', this.secondaryColor);
    sessionStorage.setItem('tertiaryColor', this.tertiaryColor);
    sessionStorage.setItem('backgroundColor', this.backgroundColor);
    // También puedes aplicar los colores al sitio aquí si es necesario
  }

  onBeforeUnload(event: BeforeUnloadEvent): void {
    // Manejar cambios no guardados
    if (this.hasUnsavedChanges()) {
      event.returnValue = '¿Estás seguro de que deseas salir sin guardar los cambios?';
    }
  }

  hasUnsavedChanges(): boolean {
    // Verificar si hay cambios no guardados comparando los colores actuales con los almacenados
    return (
      this.primaryColor !== sessionStorage.getItem('primaryColor') ||
      this.secondaryColor !== sessionStorage.getItem('secondaryColor') ||
      this.tertiaryColor !== sessionStorage.getItem('tertiaryColor') ||
      this.backgroundColor !== sessionStorage.getItem('backgroundColor')
    );
  }
}
