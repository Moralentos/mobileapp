import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const InputScreen = ({ navigation }) => {
  const [firstText, setFirstText] = React.useState('');
  const [secondText, setSecondText] = React.useState('');
  const [firstTextSum, setFirstTextSum] = React.useState(0);
  const [secondTextSum, setSecondTextSum] = React.useState(0);
  const [symbol, setSymbol] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const [textSum, setTextSum] = React.useState(0);

  const rus = {
    а: 1,
    б: 2,
    в: 3,
    г: 4,
    д: 5,
    е: 6,
    ё: 7,
    ж: 8,
    з: 9,
    и: 10,
    й: 11,
    к: 12,
    л: 13,
    м: 14,
    н: 15,
    о: 16,
    п: 17,
    р: 18,
    с: 19,
    т: 20,
    у: 21,
    ф: 22,
    х: 23,
    ц: 24,
    ч: 25,
    ш: 26,
    щ: 27,
    ъ: 28,
    ы: 29,
    ь: 30,
    э: 31,
    ю: 32,
    я: 33,
  };

  const handleFirstText = (elem) => {
    setFirstText(elem);
  };

  const handleSecondText = (elem) => {
    setSecondText(elem);
  };

  const getNumber = (text) => {
    const arrText = text.toLowerCase().split('');
    const arrNum = [];
    for (let i = 0; i < arrText.length; i++) {
      if (arrText[i] in rus) {
        const res = rus[arrText[i]];
        arrNum.push(res);
      }
    }
    return arrNum;
  };
  //   calc('Ёлка');
  //   console.log(getNumber('Пень'));

  const calc1 = () => {
    const textNumber = getNumber(firstText);
    const sum = textNumber.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    console.log(sum);
    console.log(textNumber);
    setFirstTextSum(sum);
  };
  const calc2 = () => {
    const textNumber = getNumber(secondText);
    const sum = textNumber.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    console.log(sum);
    console.log(textNumber);
    setSecondTextSum(sum);
  };

  const calcSum = () => {
    switch (symbol) {
      case '/':
        setTextSum(firstTextSum / secondTextSum);
        break;
      case '*':
        setTextSum(firstTextSum * secondTextSum);
        break;
      case '+':
        setTextSum(firstTextSum + secondTextSum);
        break;
      case '-':
        setTextSum(firstTextSum - secondTextSum);
        break;

      default:
        break;
    }
    setStatus(true);
  };

  React.useEffect(() => {
    calc1();
    calc2();
  }, [firstTextSum, firstText, secondText, secondTextSum]);
  console.log(symbol);
  return (
    <View style={styles.container}>
      <View
        style={{
          //   flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          //   justifyContent: 'space-between',
          //   paddingLeft: 30,
          //   paddingRight: 30,
        }}
      >
        <Text style={styles.mainText}>Введите слова</Text>
        <TextInput
          onChangeText={handleFirstText}
          style={styles.input}
          placeholder='Первое слово'
          value={firstText}
        />
        <View
          style={{
            //   borderWidth: 1,
            width: '100%',
            borderRadius: 5,
            borderColor: 'gray',
            marginBottom: 20,
            flexDirection: 'column',
          }}
        >
          <Text style={{ textAlign: 'center', color: 'gray' }}>Выберите знак</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity style={styles.btnText} onPress={() => setSymbol('/')}>
              <Text style={styles.textSymbol}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnText} onPress={() => setSymbol('*')}>
              <Text style={styles.textSymbol}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnText} onPress={() => setSymbol('+')}>
              <Text style={styles.textSymbol}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnText} onPress={() => setSymbol('-')}>
              <Text style={styles.textSymbol}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          onChangeText={handleSecondText}
          style={styles.input}
          placeholder='Второе слово'
          value={secondText}
        />
        <Button title='Посчитать' onPress={() => calcSum()}></Button>
        {status && (
          <>
            <View style={{ flexDirection: 'row', fontSize: 30, marginTop: 20 }}>
              <Text style={styles.textSymbol}>{firstTextSum}</Text>
              <Text style={styles.textSymbol}>{symbol}</Text>
              <Text style={styles.textSymbol}>{secondTextSum}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 27,
                  backgroundColor: '#2EABFF',
                  color: 'white',
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {textSum}
              </Text>
            </View>
          </>
        )}
        {/* <Button title='Назад' onPress={() => navigation.navigate('Home')}></Button> */}

        <StatusBar style='auto' />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.prevBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.prevBtnText}>Назад</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  mainText: {
    // marginTop: 50,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
    marginBottom: 20,
  },
  btnText: {
    width: 50,
    height: 50,
    backgroundColor: '#F2F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  prevBtn: {
    width: 100,
    height: 80,
    // backgroundColor: '#F2F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // marginTop: 40,
  },
  prevBtnText: {
    color: 'blue',
    fontSize: 25,
  },
  textSymbol: {
    fontSize: 20,
  },
});

export default InputScreen;
