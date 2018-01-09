import { ProjectConfigModel } from 'pcreate-config';


let projectConfig: ProjectConfigModel = {
  projectType: 'node',
  compile: {
    outDir: "./es/",
    module: "commonjs",
    target: "ESNEXT",
    declaration: true
  },
  command: false,
  documents: false,
  unitTest: false,
  sourceInclude: ["./src/**/*"]
}

export default projectConfig;