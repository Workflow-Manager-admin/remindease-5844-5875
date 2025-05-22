#!/bin/bash
cd /home/kavia/workspace/code-generation/remindease-5844-5875/main_container_for_remindease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

