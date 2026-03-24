Add-Type -AssemblyName System.Drawing
$imgPath = "F:\website\Hepatitis_Coordinator\assets\poster_final.png"
$outputPath = "F:\website\Hepatitis_Coordinator\assets\poster_thumb.png"
if (Test-Path $imgPath) {
    $img = [System.Drawing.Image]::FromFile($imgPath)
    $ratio = 400 / $img.Width
    $newWidth = 400
    $newHeight = [int]($img.Height * $ratio)
    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $img.Dispose()
    $bmp.Dispose()
    Write-Output "Resize completed: $outputPath"
} else {
    Write-Error "File not found: $imgPath"
}
