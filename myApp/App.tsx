import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { COLORS } from './src/config/color';
import { STYLES } from './src/config/style';

export default function App(): JSX.Element {
  const myArray =
    ["A child asked his father\, \"How were people born?\" So his father said, \"Adam and Eve made babies, then their babies became adults and made babies, and so on.\"The child then went to his mother, asked her the same question and she told him\, \"We were monkeys then we evolved to become like we are now.\" The child ran back to his father and said, \"You lied to me!\" His father replied, \"No, your mom was talking about her side of the family.\"",
      "Teacher: \"Kids,what does the chicken give you?\" Student: \"Meat!\" Teacher: \"Very good! Now what does the pig give you?\" Student: \"Bacon!\" Teacher: \"Great! And what does the fat cow give you?\" Student: \"Homework!\"",
      "The teacher asked Jimmy, \"Why is your cat at school today Jimmy?\" Jimmy replied crying, \"Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'\"",
      "A housewife, an accountant and a lawyer were asked \"How much is 2+2?\" The housewife replies: \"Four!\". The accountant says: \"I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.\" The lawyer pulls the drapes, dims the lights and asks in a hushed voice, \"How much do you want it to be?\""];
  const message = "That's all the jokes for today! Come back another day!";
  var randomIndex = Math.floor(Math.random() * myArray.length);
  const handleClick = () => {
    randomIndex = Math.floor(Math.random() * myArray.length)
    setDisplayText(flag == 4 ? message : myArray[randomIndex]);
    if (flag < 4) {
      setFlag(flag + 1);
    } else setFlag(0);
  };
  const [displayText, setDisplayText] = useState(myArray[0]);
  const [flag, setFlag] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./src/image/logo.png')}
          style={styles.image}
        />
        <View style={styles.imageText}>
          <View>
            <Text>handicrafted by</Text>
            <Text style ={{textAlign:'right', fontWeight: 'bold',}}
            >Jim HLS</Text>
          </View>
          <Image style={styles.image}
            source={require('./src/image/account.png')} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.banner}>
          <Text style={styles.bannerText1}>
            A joke a day keeps the doctor away
          </Text>
          <View style={{ height: 25 }} />
          <Text style={styles.bannerText2}>
            If you joke the wrong way, your teeth have no pay. (Serious)
          </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text>{displayText}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonSpace}>
        <TouchableOpacity style={styles.buttonBlue} onPress={handleClick}>
          <Text style={styles.buttonText}>This is funny!</Text>
        </TouchableOpacity>
        <View style={{ width: 30 }} />
        <TouchableOpacity style={styles.buttonGreen} onPress={handleClick}>
          <Text style={styles.buttonText}>This is not funny.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.description}>
          This appis created as part of Hlsolutions program. The materials con-
          tained on this website are provided for general information only and
          do not constitute any form of advice. HLS assumes no responsibility
          for the accuracy of any particular statement and accepts no liability
          for any loss or damage which may arise from reliance on the infor-
          mation contained on this site.
        </Text>
        <Text style={styles.copyRight}>Copyright 2021 HLS</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 36,
    height: 36
  },
  imageText: {
    flexDirection: 'row',
    margin: 10
  },
  content: {
    flex: 1,
  },
  banner: {
    backgroundColor: COLORS.GREEN,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText1: {
    ...STYLES.SIZE_20_4OO,
    color: COLORS.WHITE,
  },
  bannerText2: {
    ...STYLES.SIZE_14_4OO,
    color: COLORS.WHITE,
  },
  scrollView: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  buttonSpace: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.GREY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 40,
  },
  buttonBlue: {
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonGreen: {
    backgroundColor: COLORS.GREEN,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    ...STYLES.SIZE_16_4OO,
    color: COLORS.WHITE,
  },
  copyRight: {
    ...STYLES.SIZE_16_4OO,
    paddingVertical: 10,
    color: COLORS.GREY_10,
  },
  description: {
    ...STYLES.SIZE_14_4OO,
    color: COLORS.GREY,
    textAlign: 'center',
  },
});
