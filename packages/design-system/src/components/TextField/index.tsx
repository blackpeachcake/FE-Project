import TextField from './TextField'
import TextFieldPassword from './TextFieldPassword'

const TextFieldWithVariants = Object.assign(TextField, {
    Password: TextFieldPassword,
})
export default TextFieldWithVariants
export type {
    TextFieldProps,
    TextFieldVariant,
    TextFieldSize,
    TextFieldStatus,
} from './TextField'
