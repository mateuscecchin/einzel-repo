import { Animated, Easing, ImageBackground, Text, View } from "react-native";
import { MaskedView } from "../../components/MaskedView";
import CardBlur from "../../../assets/blur-card.png"
import TitleBlur from "../../../assets/blur-title.png"
import { LinearGradient } from "expo-linear-gradient";
import { einzelInfo } from "@einzel-repo/core";
import { useEffect, useState } from "react";
import Api, { IMessage } from "../../services/Api";

const START_LINEAR_GRADIENT = { x: 0.3, y: 0.2 }
const END_LINEAR_GRADIENT = { x: 1, y: 0.3 }

export function HomeScreen() {
    const [message, setMessage] = useState<IMessage>()
    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 5000
            ,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    async function fetchMessage() {
        try {

            const res = await Api.fetchMessage()
            setMessage(res.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchMessage()
    }, [])


    return (
        <View className="bg-zinc-900 h-screen">
            <MaskedView
                maskElement={
                    <View className="flex-1 justify-center">
                        <ImageBackground source={TitleBlur} resizeMode="stretch" className="w-96 h-52 self-center bg absolute -z-20" />
                        <Text className="font-black text-6xl text-center">
                            {message?.title}
                        </Text>
                    </View>
                }
            >
                <LinearGradient
                    colors={["#8B5CF6", "#22D3EE"]}
                    start={START_LINEAR_GRADIENT}
                    end={END_LINEAR_GRADIENT}
                    className="flex-1"
                />
            </MaskedView>
            <View className="flex-1 w-80 h-36 self-center">
                <ImageBackground source={CardBlur} resizeMode="stretch" className="w-[400px] h-[300px] self-center bg absolute -z-20 -top-16" />
                <MaskedView
                    maskElement={
                        <View className="border-2 rounded-2xl border-solid w-80 h-36 self-center relative z-10" />
                    }
                >
                    <View className="w-80 h-36 self-center absolute inset-0 z-10">
                        <Animated.View style={{ flex: 1, transform: [{ rotate: spin }] }}>
                            <View className="flex-1 items-center">
                                <View className="flex-1 min-h-[100px]" />
                                <LinearGradient
                                    colors={["#8B5CF6", "#22D3EE00"]}
                                    start={START_LINEAR_GRADIENT}
                                    end={END_LINEAR_GRADIENT}
                                    className="flex-1 w-[400px] min-h-[200px]"
                                />
                            </View>
                        </Animated.View>
                    </View>
                </MaskedView>

                <View className="
                border-2 rounded-2xl border-[#22D3EE60] bg-zinc-900
                w-80 h-36 self-center p-6 
                absolute top-0 -z-10"
                >

                    <Text className="text-violet-200 text-xl font-medium mb-4">What is that ?</Text>
                    <Text className="text-violet-200 text-base font-regular">{message?.description}</Text>
                </View>
            </View>
        </View>
    );
}
