import styled from '@emotion/styled';
import LabelTypography from './LabelTypography';
import { colors } from '../../theme/lib/';
var LabelFormFieldTypography = styled(LabelTypography)({
    textTransform: 'capitalize',
    color: colors.black,
    letterSpacing: '0.1px',
    '&.requiredField': {
        '&::before': {
            content: "'* '",
            color: colors.red2
        }
    }
});
export default LabelFormFieldTypography;
//# sourceMappingURL=LabelFormFieldTypography.js.map