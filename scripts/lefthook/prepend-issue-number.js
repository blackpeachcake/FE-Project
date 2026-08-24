#!/usr/bin/env node
const {execSync} = require('child_process')
const fs = require('fs')

const commitMsgFile = process.argv[2]
if (!commitMsgFile) {
    process.exit(0)
}

const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
const match = branch.match(/^feature\/(\d+)/)
if (!match) {
    process.exit(0)
}

const issueNumber = match[1]
const prefix = `[#${issueNumber}] `

const original = fs.readFileSync(commitMsgFile, 'utf8')
const firstLine = original.split('\n', 1)[0]

if (firstLine.startsWith(prefix) || /^(Merge |Revert |fixup!|squash!)/.test(firstLine)) {
    process.exit(0)
}

fs.writeFileSync(commitMsgFile, prefix + original)
