import { composeResolvers } from "@graphql-tools/resolvers-composition";
import userResolvers from "./userResolvers";

const composedResolvers = composeResolvers(userResolvers);

export default composedResolvers;
