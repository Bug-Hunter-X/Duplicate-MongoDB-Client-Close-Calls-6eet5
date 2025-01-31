# Duplicate MongoDB Client Close Calls

This repository demonstrates a common error when working with the MongoDB Node.js driver: calling `client.close()` multiple times.  This can lead to resource leaks or unexpected behavior. The code example highlights the problem and provides a corrected solution.

## Problem

The original `bug.js` file contains duplicate calls to `client.close()`, once inside the `try` block and again in the `finally` block. This is redundant and can interfere with the driver's internal connection management.

## Solution

The `bugSolution.js` file provides the corrected code by only calling `client.close()` once in the `finally` block. This ensures the connection is closed gracefully even if errors occur.  Using `finally` guarantees the connection closure regardless of success or failure within the `try` block. 
