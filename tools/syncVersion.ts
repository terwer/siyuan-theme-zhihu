import fs from "fs"
import minimist from "minimist"

class SyncVersion {
  async parseJSON(filename: string, versionField: string, newVersion: string): Promise<void> {
    try {
      // Read JSON from file
      const rawData = await fs.promises.readFile(filename)
      const data = JSON.parse(rawData.toString())

      // Modify version field in JSON data
      data[versionField] = newVersion

      // Write modified JSON back to file
      await fs.promises.writeFile(filename, JSON.stringify(data, null, 2))
      console.log(`修改完毕，新版本为：${newVersion}`)
    } catch (err) {
      console.error(`Error parsing JSON file: ${err}`)
    }
  }
}

;(async () => {
  const args = minimist(process.argv.slice(2))
  const newVersion = args.version || args.v

  const syncVersion = new SyncVersion()
  await syncVersion.parseJSON("theme.json", "version", newVersion)
})()
