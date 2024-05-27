import * as alt from 'alt-client';
import * as native from 'natives';

native.requestIpl('vw_casino_main');
native.requestIpl('vw_casino_garage');
native.requestIpl('vw_casino_carpark');
native.requestIpl('vw_casino_penthouse');
native.requestIpl('vw_dlc_casino_door');
native.requestIpl('hei_dlc_casino_door');
native.requestIpl('hei_dlc_windows_casino');
native.requestIpl('hei_dlc_casino_aircon');

let interiorID = native.getInteriorAtCoords(976.636, 70.295, 115.164);

let phPropList = [
    "Set_Pent_Tint_Shell",
    "Set_Pent_Pattern_01",
    "Set_Pent_Spa_Bar_Open",
    "Set_Pent_Media_Bar_Open",
    "Set_Pent_Dealer",
    "Set_Pent_Arcade_Retro",
    "Set_Pent_Bar_Clutter",
    "Set_Pent_Clutter_01",
    "set_pent_bar_light_01",
    "set_pent_bar_party_0",
];

if (native.isValidInterior(interiorID)) {
    for (const propName of phPropList) {
        native.activateInteriorEntitySet(interiorID, propName);
        native.setInteriorEntitySetTintIndex(interiorID, propName, 1);
    }
    native.refreshInterior(interiorID);
}

alt.loadDefaultIpls();