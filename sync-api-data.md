# Photo Booth API Data Sync Checklist

When you update booth data in `src/App.js`, also update `public/api/photo-booth-data.json`:

## Steps:

1. Update data in App.js (boothTypes, photoBookDesigns, features, etc.)
2. Copy updated values to public/api/photo-booth-data.json
3. Update `meta.lastUpdated` field to today's date
4. Commit both files together
5. Push to trigger deployment

## Quick Commands:

```bash
git add src/App.js public/api/photo-booth-data.json
git commit -m "Update booth data (sync App.js + JSON API)"
git push origin updates
```
