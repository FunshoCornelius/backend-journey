import os from "node:os";
import {writeFile} from "node:fs/promises";

import { formatBytes, formatUptime } from "./format.js";

import pc from "picocolors";

const data = {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus().length,
    freeMemory: formatBytes(os.freemem()),
    totalMemory: formatBytes(os.totalmem()),
    uptime: formatUptime(os.uptime()),
    node: process.version,
}


console.log(`System report for ${pc.bold(data.hostname)}`);
console.log(`${pc.dim("Platform:")} ${data.platform} (${data.arch})`);
console.log(`${pc.dim("CPUs:")} ${data.cpus}`);
console.log(`${pc.dim("Memory:")} ${data.freeMemory} free of ${data.totalMemory}`);
console.log(`${pc.dim("Uptime:")} ${data.uptime}`);
console.log(`${pc.dim("Node:")} ${data.node}`);
console.log(`${pc.dim("Generated at:")} ${new Date().toISOString()}`);

// Top level await is supported in Node.js 18 and above
await writeFile("report.json", JSON.stringify({...data, generatedAt: new Date().toISOString()}, null, 2));

console.log(pc.green("Report written to report.json"));