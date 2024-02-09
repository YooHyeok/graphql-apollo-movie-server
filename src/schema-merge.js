import { loadFiles } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// typeDefs과 reolvers의 파일 정의(각 파일들의 추적에 사용)
const typeDefsArray = await loadFiles(`${path.dirname(fileURLToPath(import.meta.url))}/**/*.typeDefs.js`, {
    useRequire: true,
    requireMethod: async path => await import(pathToFileURL(path))
});
const resolversArray = await loadFiles(`${path.dirname(fileURLToPath(import.meta.url))}/**/*.resolver.js`, {
    useRequire: true,
    requireMethod: async path => await import(pathToFileURL(path))
});

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefsArray),// 추적된 파일들을 통합
  resolvers: mergeResolvers(resolversArray),// 추적된 파일들을 통합
});
// 추적된 파일들을 사용가능하도록 분류

export default schema;