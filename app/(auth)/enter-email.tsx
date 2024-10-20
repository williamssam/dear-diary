import ArrowLeft from "@/assets/icons/arrow-left";
import { colors } from "@/theme/colors";
import { Button } from "@/ui/button";
import { Container } from "@/ui/container";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const EnterEmail = () => {
  const [text, onChangeText] = React.useState("");
  const router = useRouter();

  return (
    <Container>
      <KeyboardAwareScrollView contentContainerClassName="justify-between flex-1">
        <View className="pt-4 gap-3">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft color={colors["dd-gray-one"]} />
          </Pressable>

          <View>
            <Text className="font-wixmadefor-medium text-xl text-dd-black">
              What's your email address?
            </Text>
            <Text className="font-wixmadefor text-lg text-dd-gray-one">
              Enter you email address so you can log back in.
            </Text>
          </View>
        </View>

        <TextInput
          className="h-[70px] rounded-lg py-1 text-4xl font-wixmadefor-bold text-dd-black bg-transparent"
          placeholder="Email"
          onChangeText={onChangeText}
          value={text}
          autoComplete="name"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderClassName="text-dd-pink-one"
        />

        <View style={{ marginTop: "auto" }}>
          <Button onPress={() => router.push("/personalize-diary")}>
            Continue
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default EnterEmail;
