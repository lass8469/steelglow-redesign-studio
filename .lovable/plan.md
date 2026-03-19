
## Plan: Update Web3Forms Access Key

All contact forms and spec sheet requests already use a single centralized utility at `src/lib/web3forms.ts`. The key only exists in one place.

### Change
- **`src/lib/web3forms.ts` line 1**: Replace the current access key `2a8d7c6c-8bdf-47bf-8a04-e171651dd101` with the new key `079a8668-2fee-48c7-9065-e674c666bf3d`.

That's it — one line change covers all forms site-wide.
