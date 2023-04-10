import RNMaskedView, { MaskedViewProps } from "@react-native-masked-view/masked-view"


export function MaskedView({ ...rest }: MaskedViewProps) {
    return (
        <RNMaskedView
            style={{ flex: 1 }}
            {...rest}
        />
    )
}