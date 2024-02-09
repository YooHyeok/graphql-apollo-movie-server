import { loadFilesSync, loadFiles  } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';


// const typeDefsArray = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
// const resolversArray = loadFilesSync(`${__dirname}/**/*.resolver.js`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefsPath = path.join(
    __dirname, '**/*.typeDefs.js'
);
const resolversPath = path.join(
    __dirname, '**/*.resolver.js'
);


const typeDefsArray = await loadFiles(typeDefsPath, {
    useRequire: true,
    requireMethod: async (path) => {
        console.debug('Using typeDefs at:', path);
        return await import(pathToFileURL(path));
    }
});
const resolversArray = await loadFiles(resolversPath, {
    useRequire: true,
    requireMethod: async (path) => {
        console.debug('Using resolver at:', path);
        return await import(pathToFileURL(path));
    }
});


// typeDefs과 reolvers의 파일 정의(각 파일들의 추적에 사용)

const mergedTypeDefs = mergeTypeDefs(typeDefsArray);
const mergedResolvers = mergeResolvers(resolversArray);
// 추적된 파일들을 통합
console.log(mergedTypeDefs)
const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});
// 추적된 파일들을 사용가능하도록 분류

export default schema;