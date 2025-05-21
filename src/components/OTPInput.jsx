import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 5;

const OTPInput = ({ onCodeFilled, hasError }) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={(text) => {
        setValue(text);
        if (text.length === CELL_COUNT && onCodeFilled) {
          onCodeFilled(text);
        }
      }}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          key={index}
          style={[
            styles.cell,
            hasError && styles.errorCell,
            isFocused && styles.focusCell,
          ]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          <Text style={styles.cellText}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: "space-between",
  },

  cell: {
    width: 65,
    height: 70,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  cellText: {
    fontSize: 24,
    textAlign: "center",
  },

  focusCell: {
    borderColor: "#F85605",
  },

  errorCell: {
    borderColor: "#F54135",
  },
});
