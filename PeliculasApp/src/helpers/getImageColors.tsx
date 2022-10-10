import ImageColors from 'react-native-image-colors';
import { AndroidImageColors, IOSImageColors, WebImageColors } from 'react-native-image-colors/lib/typescript/types';

export const getImageColors = async (uri: string) => {
    const colors: WebImageColors | IOSImageColors | AndroidImageColors  = await ImageColors.getColors(uri, {});
    let primary, secondary;
    if(colors.platform === "android"){
        primary = colors.dominant;
        secondary = colors.average;
    } else if (colors.platform === "ios") {
        primary = colors.primary;
        secondary = colors.secondary;
    }
    return [primary, secondary]
}