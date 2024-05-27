import * as alt from 'alt-client';
import * as native from 'natives';
import { LoaderIPLConfig } from '../shared/config.js';


alt.requestIpl('vw_casino_penthouse');
let interiorID = native.getInteriorAtCoords(976.6364, 70.29476, 115.1641);
if (native.isValidInterior(interiorID)) {
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Tint_Shell');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Pattern_09');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Spa_Bar_Open');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Media_Bar_Open');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Arcade_Modern');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Bar_Clutter');
    native.activateInteriorEntitySet(interiorID, 'Set_Pent_Clutter_03');
    native.activateInteriorEntitySet(interiorID, 'Set_pent_bar_light_02');
    
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Tint_Shell', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Pattern_09', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Spa_Bar_Open', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Media_Bar_Open', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Arcade_Modern', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Bar_Clutter', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_Pent_Clutter_03', 1);
    native.setInteriorEntitySetTintIndex(interiorID, 'Set_pent_bar_light_02', 1);

    native.refreshInterior(interiorID);
}

alt.requestIpl('vw_casino_main');
alt.requestIpl('vw_casino_carpark');
alt.requestIpl('vw_dlc_casino_door');
alt.requestIpl('vw_casino_door');
alt.requestIpl('hei_dlc_windows_casino');
alt.requestIpl('hei_dlc_casino_door');
alt.requestIpl('hei_dlc_casino_aircon');
alt.requestIpl('vw_casino_garage');

alt.loadDefaultIpls();