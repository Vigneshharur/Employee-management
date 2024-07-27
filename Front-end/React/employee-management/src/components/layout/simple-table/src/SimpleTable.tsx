import React from 'react';
import '@emotion/core';
import styled from '@emotion/styled';
import { SmallTypography, StandardTypography } from '../../typography/lib/index';
import { colors, sizes } from '../../theme/lib/index';

const StyledTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
  thead {
    background-color: ${colors.gray1};
  }
  td {
    padding: ${sizes.xSmall} 0;
  }
  tbody tr {
    border-bottom: 1px solid ${colors.gray2};
  }
`;

type SimpleTableProps = {
  data: object[];
  header?: string[];
};

const getHeaders = (header: string[]): React.ReactNode => {
  return (
    <tr>
      {header.map((item, index) => (
        <td key={index}>
          <SmallTypography>{item}</SmallTypography>
        </td>
      ))}
    </tr>
  );
};

const getBody = (data: object[]): React.ReactNode => {
  return (
    <React.Fragment>
      {data.map((trItem: { [index: string]: any }, index) => (
        <tr key={index}>
          {Object.keys(trItem).map((objectKey: string, index) => (
            <td key={index}>
              <StandardTypography>{trItem[objectKey]}</StandardTypography>
            </td>
          ))}
        </tr>
      ))}
    </React.Fragment>
  );
};

const SimpleTable: React.FC<SimpleTableProps> = ({ data, header }) => {
  return (
    <StyledTable>
      {header ? <thead>{getHeaders(header)}</thead> : null}
      <tbody>{getBody(data)}</tbody>
    </StyledTable>
  );
};

export default SimpleTable;
