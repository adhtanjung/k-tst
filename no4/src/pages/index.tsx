import { FormEvent, ChangeEvent, useState } from "react";
import {
	Stack,
	FormControl,
	Input,
	Button,
	useColorModeValue,
	Heading,
	Text,
	Container,
	Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
interface IIndex {}
import { whichOperator } from "../utils";

export default function Index<IIndex>() {
	const [input, setInput] = useState("");
	const [state, setState] = useState<"initial" | "submitting" | "success">(
		"initial"
	);
	const [error, setError] = useState(false);
	const [result, setResult] = useState<string | "" | undefined>("");
	const handleFix = (e: FormEvent, str: any) => {
		e.preventDefault();
		setError(false);
		setState("submitting");

		// remove this code and implement your submit logic right here
		// setTimeout(() => {
		// 	if (input === "fail@example.com") {
		// 		setError(true);
		// 		setState("initial");
		// 		return;
		// 	}

		// 	setState("success");
		// }, 1000);
		if (str.includes(",")) {
			let splitted = str.split(",");
			setResult(
				`${whichOperator(splitted[0].split(" "))}, ${whichOperator(
					splitted[1].split(" ")
				)}`
			);
			setState("success");
		} else {
			let splitted = str.split(" ");
			setResult(whichOperator(splitted));
			setState("success");
		}
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Container
				maxW={"lg"}
				bg={useColorModeValue("white", "whiteAlpha.100")}
				boxShadow={"xl"}
				rounded={"lg"}
				p={6}
				direction={"column"}
			>
				<Heading
					as={"h2"}
					fontSize={{ base: "xl", sm: "2xl" }}
					textAlign={"center"}
					mb={5}
				>
					Fill the missing operators!
				</Heading>
				<Stack
					direction={{ base: "column", md: "row" }}
					as={"form"}
					spacing={"12px"}
					onSubmit={(e: FormEvent) => handleFix(e, input)}
				>
					<FormControl>
						<Input
							variant={"solid"}
							borderWidth={1}
							color={"gray.800"}
							_placeholder={{
								color: "gray.400",
							}}
							borderColor={useColorModeValue("gray.300", "gray.700")}
							id={"text"}
							type={"text"}
							required
							placeholder={"Input here"}
							aria-label={"Input here"}
							value={input}
							disabled={state !== "initial"}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setInput(e.target.value)
							}
						/>
					</FormControl>
					<FormControl w={{ base: "100%", md: "40%" }}>
						<Button
							colorScheme={state === "success" ? "green" : "blue"}
							isLoading={state === "submitting"}
							w="100%"
							type={state === "success" ? "button" : "submit"}
						>
							{state === "success" ? <CheckIcon /> : "Submit"}
						</Button>
					</FormControl>
				</Stack>
				<Text
					mt={2}
					textAlign={"center"}
					color={error ? "red.500" : "gray.500"}
				>
					{error
						? "Oh no an error occured! 😢 Please try again later."
						: "e.g: 5 3 8 or 9 27 3 or 5 2 25,1 5 2! ✌️"}
				</Text>
				{result ? (
					<Heading
						as={"h4"}
						fontSize={{ base: "l", sm: "xl" }}
						textAlign={"center"}
						my={3}
					>
						Result: {result}
					</Heading>
				) : null}
			</Container>
		</Flex>
	);
}
