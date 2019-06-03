if git diff --name-only HEAD^...HEAD | grep "^packages/${PROJECT}"; then
  echo "Changes here, run the build"
  npm run test
else
  echo "No changes detected"
  exit 0
fi