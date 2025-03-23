function win () {
    game.setGameOverMessage(true, "You won with these points!")
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(true)
}
tiles.setCurrentTilemap(tilemap`maze`)
tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(5, 62))
Render.setViewMode(ViewMode.raycastingView)
music.play(music.stringPlayable("E D C D C E C C ", 30), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (Render.getRenderSpriteInstance().x == 53 && Render.getRenderSpriteInstance().y == 1 || Render.getRenderSpriteInstance().x == 54 && Render.getRenderSpriteInstance().y == 1) {
        win()
    }
})
