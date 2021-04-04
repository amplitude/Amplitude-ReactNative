import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import { SdkSectionLayout } from './SdkSectionLayout';
import { useAmplitude } from '../utils/amplitude';

const sanitizeNumericInput = (value: string): string =>
  value.replace(/[^0-9.]/g, '');

export const RevenueSection = () => {
  const [productId, setProductId] = React.useState<string>('');
  const [price, setPrice] = React.useState<string>('');
  const [quantity, setQuantity] = React.useState<string>('');

  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Revenue'}>
      <Input
        placeholder={'Product ID'}
        value={productId}
        onChangeText={setProductId}
        containerStyle={styles.inputContainer}
      />
      <View style={styles.inputView}>
        <Input
          placeholder={'Price'}
          value={`${price}`}
          onChangeText={(newPrice) => setPrice(sanitizeNumericInput(newPrice))}
          containerStyle={styles.halfInput}
        />
        <Input
          placeholder={'Quantity'}
          value={`${quantity}`}
          onChangeText={(newQuantity) =>
            setQuantity(sanitizeNumericInput(newQuantity))
          }
          containerStyle={styles.halfInput}
        />
      </View>
      <Button
        style={styles.button}
        title={'Send Revenue'}
        disabled={!productId || !price || !quantity}
        onPress={() => {
          amplitude.logRevenue({
            productId,
            price: Number(price),
            quantity: Number(quantity),
          });
        }}
      />
    </SdkSectionLayout>
  );
};

const styles = StyleSheet.create({
  halfInput: {
    width: '50%',
  },
  inputContainer: {
    width: '100%',
    marginLeft: -5,
  },
  inputView: {
    flexDirection: 'row',
    marginLeft: -5,
  },
  button: {
    width: '50%',
  },
});
